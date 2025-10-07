async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/SisterKrone/Portfolio_DIO/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)       
    return await fetching.json()    
}