import fetch from 'node-fetch';

 

const publicURL = https://management.azure.com/subscriptions/f4110fe7-cbc8-4752-8ee9-1f02eb1e63d4/resourceGroups/BENJIRESOURCE/providers/Microsoft.Network/publicIPAddresses/BENJI?api-version=2019-02-01

 

const NIURL = https://management.azure.com/subscriptions/f4110fe7-cbc8-4752-8ee9-1f02eb1e63d4/resourceGroups/BENJIRESOURCE/providers/Microsoft.Network/networkInterfaces/BENJI?api-version=2022-05-01

 

const VMURL = https://management.azure.com/subscriptions/f4110fe7-cbc8-4752-8ee9-1f02eb1e63d4/resourceGroups/BENJIRESOURCE/providers/Microsoft.Compute/virtualMachines/BB1234?api-version=2017-03-30

 

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83NjYzMTdjYi1lOTQ4LTRlNWYtOGNlYy1kYWJjOGUyZmQ1ZGEvIiwiaWF0IjoxNjY4NzAxODUwLCJuYmYiOjE2Njg3MDE4NTAsImV4cCI6MTY2ODcwNTg4MSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXBHZ2hTYzgzekRoRitmNjlWTzRWd09MWmg0Q1lWTk9WejJ4TXdsRUFGRFh3Y2N1Y2xiN09sNTYvN0Myb2xTNUZ2djB0MFBhb0dMMU9ramRBanh1MlJoeUE3eURvOHoyektrcEE4TVhmempzPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkJvd2UiLCJnaXZlbl9uYW1lIjoiQmVuamFtaW4iLCJncm91cHMiOlsiODdmNjAwM2QtOTQ3MC00MzhmLWJmZWYtODEzYjM3ZmMyYjY4IiwiZDJhNmE4ZWYtNGQyNi00ZDk1LWJkMTEtYWExZWM2MTlmODE4IiwiOTdhZjgxMmQtOTZlOS00ZjAxLThhMTEtNzU4MDMzNzYyMTdhIiwiOGM4MTg2ZWEtNDJhNC00NGFmLThhNzgtYWU5MTQwMTFlNmI0IiwiNWFkN2Q2YjQtYWRhZi00YjlkLTk1N2YtMGYzYjYxNGJlZTYwIiwiMTI1Y2FiN2MtZjllYi00M2U1LTllMjEtNWUzYjVkZGQwNWJhIiwiOGFjMTU0ZGQtZDQ1Zi00YzQ2LTk0ZTUtYmI3OGZlZmEzYWVmIl0sImlwYWRkciI6IjIwLjE2Ni43Mi40IiwibmFtZSI6IkMyMDQxNjAwNiBCZW5qYW1pbiBCb3dlIiwib2lkIjoiOWRmYTQyNmItMTkxMC00Mzc2LWExYWEtY2UyZjgzMWZjMDYzIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIwMjU0MjkyNjUtMTk1ODM2NzQ3Ni03MjUzNDU1NDMtMzI2MDEwIiwicHVpZCI6IjEwMDMyMDAwRTRBRTk0OUIiLCJyaCI6IjAuQVRFQXl4ZGpka2pwWDA2TTdOcThqaV9WMmtaSWYza0F1dGRQdWtQYXdmajJNQk14QUU4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IncwNHR6MEo3MzhZekZmR0hpZThWN2tHV1ZTNVdfVzlJRURPbFROQ2I1cEEiLCJ0aWQiOiI3NjYzMTdjYi1lOTQ4LTRlNWYtOGNlYy1kYWJjOGUyZmQ1ZGEiLCJ1bmlxdWVfbmFtZSI6IkMyMDQxNjAwNkBteXR1ZHVibGluLmllIiwidXBuIjoiQzIwNDE2MDA2QG15dHVkdWJsaW4uaWUiLCJ1dGkiOiJNbnp5WVFFeE5VaVpqZ2g5WnVvWEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfdGNkdCI6MTUyNTMzODk0MX0.dgvsJcFxsLNru0pqsQFbdmJpOT6wJ6AMCgHINvc_xyFbQaN33gON7UmpN6eBnG1xNSdbHmDOrMgMcuR365obyPZuB2OC3cL1vxtHHRmRlRKUfgmNgj0qkq59KRckwjlLqZHLk200rtYi7cIVI2uI5HYA0MmkKri46XYoR6FrDSr3MBqy0X8j2Sx2UR38u7E2DUXOTvRfGDL-BMx6-E45WNVuNZ69AyfKX49gxXEN8TsGUT-n9uKMTw2HybfAlDuQZIz4QBRZyKe4QPjvjGBjcimo7thpFzP0SkW0jU8KY7dgY6ZjhyxjrgG-7M4zLM5aeRmjzKvqu9ZBcVJr4f6PBQ"
 

async function createPublicIP (){

    await fetch(publicURL, {

        method: 'PUT',

        headers:{

            'Content-Type':'application/json',

            'Authorization': token

        },

        body: JSON.stringify(

            {

                "properties": {

                    "publicIPAllocationMethod": "Static",

                    "idleTimeoutInMinutes": 10,

                    "publicIPAddressVersion": "IPv4"

                    },

                    "sku": {

                    "name": "Basic"

                    },

                    "location": "westeurope"

                   

            }

        )

    }).then(res => res.json())

    .then(res => console.log(res))

}

 

createPublicIP();