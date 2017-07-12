# Farmland Monitoring with Planet Imagery and FME Cloud 
This demo shows how to collect, transform, and compare Planet imageryover a certain  
area. The demo consists of three workspaces. One workspace checks and downloads new Planet images as soon as they become
available. It produces four outputs - RGB thumbnails, full resolution RGB, NIr (Near Infrared ), and NDVI (Normalized Difference Vegetation Index).
The second workspace displays this page - it shows the latest image and allows selecting the date range for visualization. 
The third workspace shows the previews of all available images within the given range and allows comparing two selected imagesin any of three representations - RGB, NIr, and NDVI.