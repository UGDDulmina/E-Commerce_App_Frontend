export async function saveBuyer(buyerData){
    try{
        const response = await fetch('http://localhost:3000/buyers/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(buyerData)
        });

        if(!response.ok){
            throw new Error('Failed to save student data');
        }
        console.log(response)

        const data = await response.json();
        return data;

    }
    catch(error){
        console.error('Error saving buyer data:', error);
        throw error;

    }
}