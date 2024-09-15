

export  async function saveSeller(sellerData){
    try{
        const response = await fetch('http://localhost:3000/sellers/signup', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sellerData)
        });

        if(!response.ok){
            throw new Error('Failed to save seller data');
        }
        console.log(response)

        const data = await response.json();
        return data;
    }
        catch(error){
        console.error('Error saving seller data:', error);
        throw error;
    }
}

export  async function loginSeller(sellerData){
    try{
        const response = await fetch('http://localhost:3000/sellers/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sellerData)
        });

        if(!response.ok){
            throw new Error('Login Fail!');
        }
        console.log(response)

        const data = await response.json();
        return data;
    }
        catch(error){
        console.error('Error saving seller data:', error);
        throw error;
    }
}




