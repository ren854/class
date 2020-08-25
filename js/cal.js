let money=0;
                document.getElementById("tot_money").innerHTML = money;
                function tot(add,now){
                    now=add+now;
                    document.getElementById("tot_money").innerHTML = now;
                    return now;
                }