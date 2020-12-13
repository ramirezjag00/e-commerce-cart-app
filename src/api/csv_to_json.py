import json
import csv

with open ("data/Products.csv", "r") as f:
    reader = csv.reader(f)
    next(reader)
    data = {"items": []}
    for row in reader:
        print (row)
        data["items"].append({
            "id": row[0],
            "name": row[1],
            "barcode": row[2],
            "price": row[3],
            "brand": row[4],
            "category": row[5]
        })

with open ("data/products.json", "w") as f:
    json.dump(data, f, indent=2)