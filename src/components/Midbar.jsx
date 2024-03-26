import React, { useEffect, useState } from 'react'

const Midbar = ({valueVariable, isNumberEnabledVarible, isCharacterEnabledVariable}) => {
    const [password, setPassword] = useState('wDqLsdEoZf');
    // const [textToCopy, setTextToCopy] = useState('Text to copy');

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        .then(() => alert('Text copied to clipboard: ' + password))
        .catch((error) => console.error('Error copying text: ', error));
    };

    useEffect(() => {
        console.log("hello useEffect is called !!");
        let updatedPassword = "";
        for(let i=0; i < parseInt(valueVariable); i++) {
            let cnt = 1;
            if(isNumberEnabledVarible) {
                cnt++;
            }
            if(isCharacterEnabledVariable) {
                cnt++;
            }
            let randomNumber1 = Math.floor(Math.random() * 26) + 1;
            let randomNumber2 = Math.floor(Math.random() * 2) + 1;
            let randomNumber3 = Math.floor(Math.random() * 9) + 1;
            let randomNumber4 = Math.floor(Math.random() * 3) + 1;
            let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '|'];


            switch(cnt) {
                case 1 :
                    //check for small character and capital character 
                    if(randomNumber2 == 1) {
                        updatedPassword += String.fromCharCode(randomNumber1 + 96);           
                    }else{
                        updatedPassword += String.fromCharCode(randomNumber1 + 64); 
                    }
                    break;
                case 2:
                    if(isNumberEnabledVarible) {
                        //will be a number otherwise character
                        if(randomNumber4 == 1) {
                            updatedPassword += randomNumber3;
                        }else{
                            if(randomNumber2 == 1) {
                                updatedPassword += String.fromCharCode(randomNumber1 + 96);           
                            }else{
                                updatedPassword += String.fromCharCode(randomNumber1 + 64); 
                            }
                        }
                    }else{
                        //will be a special character otherwise character
                        if(randomNumber4 == 2) {
                            updatedPassword += specialCharacters[randomNumber3-1];
                        }else{
                            if(randomNumber2 == 1) {
                                updatedPassword += String.fromCharCode(randomNumber1 + 96);           
                            }else{
                                updatedPassword += String.fromCharCode(randomNumber1 + 64); 
                            }
                        }
                    }
                    break;
                case 3:
                    let x = randomNumber4 - 1;
                    if(x == 0) {
                        if(randomNumber2 == 1) {
                            updatedPassword += String.fromCharCode(randomNumber1 + 96);           
                        }else{
                            updatedPassword += String.fromCharCode(randomNumber1 + 64); 
                        }
                    }else if(x == 1) {
                        updatedPassword += randomNumber3;
                    }else {
                        updatedPassword += specialCharacters[randomNumber3-1];
                    }
                    break;
            }
        }
        console.log("updated", updatedPassword);
        setPassword(updatedPassword);
    },[valueVariable, isNumberEnabledVarible, isCharacterEnabledVariable])
    return (
        <div className="w-100 h-1/2  flex justify-center items-center">
            <input type="text" className="text-gray-400  font-medium focus:outline-none w-4/5 h-10 rounded-l-lg pl-3" value={password} />
            <button  onClick={handleCopy} className="text-gray-200 bg-indigo-600 w-20 h-10 rounded-r-lg">COPY</button>
        </div>
    )
}

export default Midbar