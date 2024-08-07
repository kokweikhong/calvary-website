package main

import "fmt"

func main() {
	// keys, err := ListObjects("")
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// fmt.Println(keys)

	csvData, err := ReadCSVFile("csv/projects.csv")
	if err != nil {
		fmt.Println(err)
		return
	}

	// err = GenerateProductsJSON(csvData, "output/products.json")
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	err = GenerateProjectsJSON(csvData, "output/projects.json")
	if err != nil {
		fmt.Println(err)
		return
	}

	// doSpaces, err := NewDOSpaces()
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// keys, err := doSpaces.ListObjects()
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
	// fmt.Println(keys)

	// err = doSpaces.DownloadDirectory("projects")
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
}
