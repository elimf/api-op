import json

# Fonction pour modifier le JSON
def modify_json(input_file, output_file):
    # Lire le fichier JSON d'entrée
    with open(input_file, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    # Vérifier si json_data est une liste
    if isinstance(json_data, list):
        for item in json_data:
            # Suppression de l'ID principal
            if isinstance(item, dict) and "id" in item:
                del item["id"]
            
            # Extraction et remplacement des IDs pour arc et saga
            if isinstance(item.get("arc"), dict):
                item["arc"] = item["arc"].get("id")
            
            if isinstance(item.get("saga"), dict):
                item["saga"] = item["saga"].get("id")
    elif isinstance(json_data, dict):
        # Gérer le cas où le JSON est un seul objet
        if "id" in json_data:
            del json_data["id"]
        
        if isinstance(json_data.get("arc"), dict):
            json_data["arc"] = json_data["arc"].get("id")
        
        if isinstance(json_data.get("saga"), dict):
            json_data["saga"] = json_data["saga"].get("id")
    
    # Écrire le JSON modifié dans le fichier de sortie
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, indent=4, ensure_ascii=False)

# Chemins des fichiers d'entrée et de sortie
input_file = 'input.json'
output_file = 'output.json'

# Appeler la fonction pour modifier le JSON
modify_json(input_file, output_file)
