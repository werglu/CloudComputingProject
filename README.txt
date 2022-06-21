1. Stwórz stack z templatu
	Arn roli(LabRole) sprawdź w serwisie IAM
2. Zaktualizuj appsetingsy frontu (ClientApp\src\environments\environment.prod.ts)
	ApiBaseUrl - sprawdź w serwisie APIGateway=>RestApi=>Stages=>prod
	BucketName - sprawdź w outpucie stacka (FilesBucketName)
3. Zbuduj frontend (ng build --prod)
4. Wrzuć pliki z folderu dist do bucketa
	Nazwę bucketa sprawdź w outpucie stacka (WebServerBucketName)
5. Zmodyfikuj serwis APIGateway
	W każdej metodie w opcjach `Integration Request` kliknij w edycję `Execution role` i zapisz (bez zmian)
	Zrób deploy api
6. Wejdź na stronę
	Url sprawdź w outpucie stacka (CloudFrontUrl)