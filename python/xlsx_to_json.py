import pandas as pd
import json
import sys

def xlsx_to_json(xlsx_file):
  # Read the Excel file into a pandas DataFrame
  df = pd.read_excel(xlsx_file, index_col=0)
  
  # Convert the DataFrame to a dictionary
  data = df.to_dict(orient='records')
  
  return data


def save_json(data, json_file):
  # Save the dictionary as a JSON file
  with open(json_file, 'w') as file:
    json.dump(data, file, indent=2)


json_data = xlsx_to_json(sys.argv[1])
save_json(json_data, sys.argv[2])