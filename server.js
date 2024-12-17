const express = require('express');
const cors = require('cors'); 


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let taskStatus = {
    disclosureSent: false,
    emailResponse: false,
    disclosureChecked: false,
    completed: false
  };



app.get('/api/tasks', (req, res) => {

  const now = new Date();
  

    res.json({ 
        time:  new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(now),
        
        assignee:  'jay',
        reviewer:  'ajay',
        status:{
          disclosureSent: true,
          emailResponse: true,
          disclosureChecked: true,
          completed: true,}

    });
  } )

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
