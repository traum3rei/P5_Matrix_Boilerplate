class Anim {
    constructor() {
      this.text = "Hello"
      this.currentCharacter = 0;
      this.margin = 25;  
      this.count = 0;      
    }

    render() {
      tex.background(0);
      let currentString = this.text.substring(0, this.currentCharacter);
      console.log(currentString)
      tex.push();
      tex.stroke(255);
      tex.fill(255);
      tex.strokeWeight(0.3);
      //tex.strokeWeight(2);
      tex.textFont("Courier")
      tex.textAlign(tex.CENTER, tex.CENTER);
      tex.textSize(12);
      
      tex.text(currentString, 0, 0, tex.width, tex.height);
      tex.pop();
      tex.fill(255);
      
      if(this.currentCharacter >= this.text.length) {
        this.count++;
        if(this.count === 120) {
          this.currentCharacter = 0;
        } 
      } else {
        this.currentCharacter += tex.random(0.05, 0.15);  
      }
    }

}
