function lunxu(strUser) {
        // var code=$('.usercode').val();
        // var code="NN6EZZg%2fNXI%3d";
            var _parms= {
                "strUser":strUser,
                }
         $.ajax({
             type: "POST",
             headers:{
                            "auth":user_data.Token
                        },
             url: "http://www.chinadecen.com:85/mobileApi/Member/Fun_GetPerInfo",
             data:_parms,
		        datType: "JSON",
             success: function(res){
                //  alert('ooooo')
                 if(+res.Code===1){
                var user_data2=JSON.parse(localStorage.getItem("userinfo"))
                 user_data2.LogHava=res.LogHava
                //  localStorage.getItem("userinfo")
                 localStorage.setItem("userinfo",JSON.stringify(user_data2));
                 $('.monenyed').html(res.LogHava)
                  
                 }else{
                    
                 }
              console.log(res)
              }
         });
        
        }