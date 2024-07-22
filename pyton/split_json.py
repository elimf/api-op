import json
import os
import math

def split_json_list(input_file, output_dir, num_files):
    # Lire le fichier JSON d'entrée
    with open(input_file, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    # Vérifier si json_data est une liste
    if not isinstance(json_data, list):
        raise ValueError("Le fichier JSON doit contenir une liste d'objets.")
    
    # Calculer la taille de chaque fichier
    total_items = len(json_data)
    items_per_file = math.ceil(total_items / num_files)
    
    # Créer le répertoire de sortie s'il n'existe pas
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Diviser les données et écrire dans les fichiers de sortie
    for i in range(num_files):
        start_index = i * items_per_file
        end_index = min(start_index + items_per_file, total_items)
        chunk = json_data[start_index:end_index]
        
        output_file = os.path.join(output_dir, f'part_{i+1}.json')
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(chunk, f, indent=4, ensure_ascii=False)
    
    print(f"Divisé en {num_files} fichiers JSON.")

# Chemin du fichier JSON d'entrée, répertoire de sortie et nombre de fichiers
input_file = 'output.json'
output_dir = 'output_files'
num_files = 14

# Appeler la fonction pour diviser le JSON
split_json_list(input_file, output_dir, num_files)
