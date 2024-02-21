async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        headers: {
            'content-type': 'Access-Control-Allow-Headers: X-Requested-With',
        },
        mode: 'no-cors',
        method: 'GET',
        redirect: 'follow'
        
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('Gluteos', res.status, res.type, res.body, res.server, res)      
      console.log('Penes', res.server)     
    }    
    return res.json()
  }

export default async function Test() {
    
    const data = await getData()
    console.log(data)

    return (
        <div>
            <div className="px-2 py-1 bg-emerald-700 text-white">
                NENUCO JOVANOV
            </div>
        </div>
    );
};