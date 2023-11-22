

const Fresh = ()=>{
//fetch fresh items from the db and list it here, use api Endpoint

    const fresh = {}

    return(
        <ScrollView >
        <Header/>
        {
          fresh.map(
            (product)=><Product product={product}/>
          )
        }

      </ScrollView>
    )
}

export default Fresh;