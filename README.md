# Hospital-Mgt-API

The API's which is implemented in the code - ![image](https://github.com/Rk230907/Hospital-Mgt-API/assets/134736112/b43e0a2d-92f3-45f4-8bde-f5a2130506d2)

The Code follows the MVC Architecture. You can run the code by installing dependencies by npm install. Run the code by npm start.

Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

**Models** - There are total 3 models scehma created - 1) Doctor, 2) Patient, 3) Reports
