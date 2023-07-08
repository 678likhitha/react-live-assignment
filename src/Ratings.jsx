import React from 'react'
const ratings  = [
    {ratingCount:"1",
    value:'Bad'
    },
    {
        ratingCount:'2',
        value:'Not bad'
    },
    {ratingCount:'3',
    value:"Ok"

    },
    {
        ratingCount:"4",
        "value":"good"
    },
    {
        ratingCount:'5',
        value:'Great'
    }
]
const Ratings = ({toggleModify}) => {
  return (
    <div
    className='container rating col-md-6'>
        <h4 className='text-center'>Ratings</h4>
      {ratings&& ratings.map((item) => (
        <div className='card ' style={{ background:' rgb(154, 150, 150)'}} onClick={toggleModify}>
            <div className='card-body'>
                <div className="row">
                    <div className="col-md-3">
                    <div className='card-text '>
                    {item.ratingCount}
                </div>
                    </div>
                    <div className="col-md-3">
                    <div className='card-text '>
                    {item.value}
                </div>
                    </div>
                </div>
               
            </div>
        </div>
      )) }
    </div>
  )
}

export default Ratings