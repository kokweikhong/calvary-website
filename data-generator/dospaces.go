package main

import (

	// Additional imports needed for examples below

	"fmt"
	"io"
	"log/slog"
	"os"
	"path/filepath"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type DOSpacesService interface {
	ListObjects() ([]string, error)
	DownloadDirectory(directory string) error
}

type DOSpaces struct {
	client *s3.S3
}

func NewDOSpaces() (DOSpacesService, error) {
	key := "DO00VJTLTBLG6DYMR9HU"
	secret := "k6eN3Zh7AmYST4NUyewuYdEQTJVZP5HNMvPonZ5u4C0"
	s3Config := &aws.Config{
		Credentials:      credentials.NewStaticCredentials(key, secret, ""),
		Endpoint:         aws.String("https://.sgp1.digitaloceanspaces.com"),
		Region:           aws.String("sgp1"),
		S3ForcePathStyle: aws.Bool(false), // // Configures to use subdomain/virtual calling format. Depending on your version, alternatively use o.UsePathStyle = false
	}

	newSession, err := session.NewSession(s3Config)
	if err != nil {
		return nil, err
	}
	s3Client := s3.New(newSession)

	return &DOSpaces{
		client: s3Client,
	}, nil

}

func (d *DOSpaces) ListObjects() ([]string, error) {
	// list all objects in a bucket
	bucket := "calvarycarpentry-cloud-storage"
	input := &s3.ListObjectsV2Input{
		Bucket:  aws.String(bucket),
		MaxKeys: aws.Int64(1000),
		Prefix:  aws.String(""),
		// Delimiter: aws.String(""),
		// ContinuationToken: aws.String(""),
		// FetchOwner: aws.Bool(true),
		// StartAfter: aws.String(""),
	}

	result, err := d.client.ListObjectsV2(input)
	if err != nil {
		slog.Error(fmt.Sprintf("Error listing objects: %s", err))
		return nil, err
	}

	var keys []string

	for objectIndex, object := range result.Contents {
		// check if object is a directory
		if *object.Size == 0 {
			continue
		}
		slog.Info(fmt.Sprintf("Object %d: %s", objectIndex, *object.Key))
		keys = append(keys, *object.Key)
	}

	return keys, nil
}

// Download entire directory from DigitalOcean Spaces
func (d *DOSpaces) DownloadDirectory(directory string) error {
	bucket := "calvarycarpentry-cloud-storage"
	listInput := &s3.ListObjectsV2Input{
		Bucket: aws.String(bucket),
		Prefix: aws.String(directory),
		// Delimiter: aws.String("/"), // To get only objects within the folder, not subfolders.
	}
	listResult, err := d.client.ListObjectsV2(listInput)
	if err != nil {
		fmt.Println("Error listing objects:", err)
		return err
	}

	slog.Info(fmt.Sprintf("Downloading %d objects from %s", len(listResult.Contents), directory))

	// Download each object in the folder.
	for _, obj := range listResult.Contents {
		downloadInput := &s3.GetObjectInput{
			Bucket: aws.String(bucket),
			Key:    obj.Key,
		}
		slog.Info(fmt.Sprintf("Class: %s", *obj.StorageClass))

		slog.Info(fmt.Sprintf("Downloading: %s", *obj.Key))

		downloadResult, err := d.client.GetObject(downloadInput)
		if err != nil {
			fmt.Println("Error downloading object:", *obj.Key, err)
			continue
		}
		defer downloadResult.Body.Close()

		// Determine the local file path to save the object.
		localPath := filepath.Join("downloads", *obj.Key)
		localDir := filepath.Dir(localPath)
		info, err := os.Stat(localPath)
		if err := os.MkdirAll(localDir, 0755); err != nil {
			fmt.Println("Error creating local directory:", err)
			return err
		}
		if err != nil {
			if os.IsNotExist(err) {
				fmt.Println("File or directory does not exist.")
				if info.IsDir() {
					if err := os.MkdirAll(localDir, 0755); err != nil {
						fmt.Println("Error creating local directory:", err)
						return err
					}
				}
			} else {
				fmt.Println("Error:", err)
			}
			return err
		}
		// if _, err := os.Stat(localDir); os.IsNotExist(err) {
		// 	if err := os.MkdirAll(localDir, 0755); err != nil {
		// 		fmt.Println("Error creating local directory:", err)
		// 		return err
		// 	}
		// }

		// Create the local directory if it doesn't exist.
		if info.IsDir() {
			continue
		}

		// Create the local file.
		file, err := os.Create(localPath)
		if err != nil {
			fmt.Println("Error creating local file:", err)
			return err
		}
		defer file.Close()

		// Copy the object content to the local file.
		_, err = io.Copy(file, downloadResult.Body)
		if err != nil {
			fmt.Println("Error copying object content:", err)
			return err
		}

		fmt.Println("Downloaded:", *obj.Key)
	}

	fmt.Println("Download complete.")

	return nil
}

func ListObjects(directory string) ([]string, error) {
	key := "DO00KGXT7XRF3HXCEBDG"
	secret := "5lBIvGRVosiHwfkh//29KWr+j/1ByAfiLmm2tLHtYEA"

	s3Config := &aws.Config{
		Credentials:      credentials.NewStaticCredentials(key, secret, ""),
		Endpoint:         aws.String("https://sgp1.digitaloceanspaces.com"),
		Region:           aws.String("sgp1"),
		S3ForcePathStyle: aws.Bool(false), // // Configures to use subdomain/virtual calling format. Depending on your version, alternatively use o.UsePathStyle = false
	}

	newSession, err := session.NewSession(s3Config)
	if err != nil {
		return nil, err
	}
	s3Client := s3.New(newSession)

	// list all objects in a bucket
	bucket := "calvarycarpentry-cloud-storage"
	input := &s3.ListObjectsV2Input{
		Bucket:  aws.String(bucket),
		MaxKeys: aws.Int64(1000),
		Prefix:  aws.String(directory),

		// Prefix: aws.String(""),
		// Delimiter: aws.String(""),
		// ContinuationToken: aws.String(""),
		// FetchOwner: aws.Bool(true),
		// StartAfter: aws.String(""),
	}

	result, err := s3Client.ListObjectsV2(input)
	if err != nil {
		return nil, err
	}

	var keys []string

	for _, object := range result.Contents {
		// check if object is a directory
		if *object.Size == 0 {
			continue
		}
		keys = append(keys, *object.Key)
	}

	return keys, nil
}
