

export  async function saveSeller(sellerData){
    try{
        const response = await fetch('http://localhost:3000/sellers/create', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sellerData)
        });

        if(!response.ok){
            throw new Error('Failed to save student data');
        }
        console.log(response)

        const data = await response.json();
        return data;
    }
        catch(error){
        console.error('Error saving student data:', error);
        throw error;
    }
}



