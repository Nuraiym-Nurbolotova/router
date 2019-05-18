import React from 'react'

function Flowers(props) {

  const classes = ['card']

  if(props.flower.marked){
    classes.push('marked')
  }

  return(
      <div className={classes.join(' ')} onClick={props.onMark}>
          <div className="card-item">
              <img 
                src={props.flower.link}/>
      <h3>
          {props.flower.name}
      </h3>
      <p>
          {props.flower.price}
        </p>
  
       </div>
      </div>
  )
}



class About extends React.Component{

  state = {
      flowers : [
          {marked: false, name: "Розы", link:"https://img2.goodfon.ru/original/2193x1439/b/ff/rozy-cvety-buket-butony.jpg", price: 1000},
          {marked: false, name: "Ромашки", link:"https://druzi.uk/upload/photos/2017/09/mx2m1Tns4eGli7M48BEF_08_f0a1d05a7f7c2d8bb28c007d43bb30f3_cover_full.jpg", price: 500},
          {marked: false, name: "Герберы", link:"https://s1.1zoom.ru/big3/131/420706-svetik.jpg", price: 800},
          {marked: false, name: "Пионы", link:"https://getbg.net/upload/full/www.GetBg.net_Nature___Flowers_Shopping_beautiful_peonies_066089_.jpg", price: 950},
           
      ]
  }

  handleMarked(name){
    const flowers = this.state.flowers.concat();

    const flower = flowers.find(f => f.name === name)
    flower.marked = !flower.marked;

    this.setState({flowers});
   
  }


  renderFlowers(){
      return this.state.flowers.map(flower => {
          return(
              <Flowers 
              flower={flower}
              key = {flower.name + Math.random()} 
              onMark ={this.handleMarked.bind(this, flower.name)}
              />
          )
      })
  }

  render(){
      return(
          <div className="list">
          {this.renderFlowers() }
          </div>
      )
}
}




export default About