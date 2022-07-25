function convert(convertermoney){
    var factor;
    f = document.getElementById('changefrom').value
    t = document.getElementById('changeto').value

    if(f == t){
        factor = 1
    }
    
    else if(f == 'UAH' && t == 'USD'){
        factor = 0.04;
    }
    else if(f == 'USD' && t == 'UAH'){
        factor = 1/0.04;
    }


    else if(f == 'UAH' && t == 'EUR'){
        factor = 0.037;
    }
    else if(f == 'EUR' && t == 'UAH'){
        factor = 1/0.037;
    }

    else if(f == 'UAH' && t == 'PLN'){
        factor = 0.16;
    }
    else if(f == 'PLN' && t == 'UAH'){
        factor = 1/0.16;
    }

    else if(f == 'UAH' && t == 'RUB'){
        factor = 2.57;
    }
    else if(f == 'RUB' && t == 'UAH'){
        factor = 1/2.57;
    }


    else if(f == 'USD' && t == 'UAH'){
        factor = 25;
    }
    else if(f == 'UAH' && t == 'USD'){
        factor = 1/25;
    }

    else if(f == 'USD' && t == 'EUR'){
        factor = 0.9;
    }
    else if(f == 'EUR' && t == 'USD'){
        factor = 1/0.9;
    }

    else if(f == 'USD' && t == 'PLN'){
        factor = 3.85;
    }
    else if(f == 'PLN' && t == 'USD'){
        factor = 1/3.85;
    }
  
    else if(f == 'USD' && t == 'RUB'){
        factor = 63.47;
    }
    else if(f == 'RUB' && t == 'USD'){
        factor = 1/63.47;
    }


    else if(f == 'EUR' && t == 'USD'){
        factor = 1.11;
    }
    else if(f == 'USD' && t == 'EUR'){
        factor = 1/1.11;
    }

    else if(f == 'EUR' && t == 'UAH'){
        factor = 27.4;
    }
    else if(f == 'UAH' && t == 'EUR'){
        factor = 1/27.4;
    }

    else if(f == 'EUR' && t == 'PLN'){
        factor = 4.27;
    }
    else if(f == 'PLN' && t == 'EUR'){
        factor = 1/4.27
    }

    else if(f == 'EUR' && t == 'RUB'){
        factor = 70.27;
    }
    else if(f == 'RUB' && t == 'EUR'){
        factor = 1/70.27;
    }



    else if(f == 'PLN' && t == 'RUB'){
        factor = 16.48;
    }
    else if(f == 'RUB' && t == 'PLN'){
        factor = 1/16.48;   
    }







    if(convertermoney == "C"){
        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
    }
    if(convertermoney == "F"){
        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
    }

}