package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strings"
)

func main() {
	readCsvFile()
}

func readCsvFile() {
	csvFile, err := os.Open("file.csv")
	if err != nil {
		log.Fatal(err)
	}

	defer csvFile.Close()

	reader := csv.NewReader(csvFile)
	reader.FieldsPerRecord = -1

	rawCSVData, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	// skip header
	for k, v := range rawCSVData {
		if k == 0 {
			continue
		}
		for valueIndex, value := range v {
			switch rawCSVData[0][valueIndex] {
			case "services", "sectors", "products", "tags":
				services := updateStringToArrayWithQuotes(value)
				rawCSVData[k][valueIndex] = services

			}
		}
		fmt.Println(rawCSVData[k])
	}

	// save to new file
	file, err := os.Create("newFile.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	writer := csv.NewWriter(file)
	defer writer.Flush()

	for _, value := range rawCSVData {
		err := writer.Write(value)
		if err != nil {
			log.Fatal(err)
		}
	}

}

func updateStringToArrayWithQuotes(value string) string {
	array := strings.Split(value, ",")
	// add " " to each service
	for k, v := range array {
		v = "\"" + strings.TrimSpace(v) + "\""
		array[k] = v
	}
	value = "[" + strings.Join(array, ",") + "]"
	return value
}
