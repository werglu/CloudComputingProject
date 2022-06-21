1. Stwórz bucket s3 na replikę 
	Region: us-west-2 (do niego mamy dostęp)
	Name: dowolna
	Bucket Versioning: true
2. Stwórz stack z templatu
	Role Arn(LabRole) sprawdź w serwisie IAM
	Regoin: us-west-2
	Name: z kroku 1
3. Zaktualizuj appsetingsy frontu (ClientApp\src\environments\environment.prod.ts)
	ApiBaseUrl - sprawdź w serwisie APIGateway=>RestApi=>Stages=>prod
	BucketName - sprawdź w outpucie stacka (FilesBucketName)
4. Zbuduj frontend (ng build --prod)
5. Wrzuć pliki z folderu dist do bucketa
	Nazwę bucketa sprawdź w outpucie stacka (WebServerBucketName)
6. Zmodyfikuj serwis APIGateway
	W każdej metodie w opcjach `Integration Request` kliknij w edycję `Execution role` i zapisz (bez zmian)
	Zrób deploy api
7. Wejdź na stronę
	Url sprawdź w outpucie stacka (CloudFrontUrl)