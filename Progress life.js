      function progressDef(current, total, barSize) {
        const progressDefesa = Math.round((barSize*current)/total)
      
        return '<:barrametade:934245074194272276>'.repeat(progressDefesa) + '<:transparent:934249082208260166>'.repeat(barSize-progressDefesa)
      }
      const vida = Math.floor(Math.random() * 99) + 1;
      //const vida = "100"

      let lifi = progressDef(vida, 100, 10)
      const user = message.mentions.users.first() || message.author;
      function num(vida) {

      if(vida === "100") {
        return `<:barrafinal:934248225022545972>`
        } else {
          return `<:final2:934254497809711114>`
        }
              }
