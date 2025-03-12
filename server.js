const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

// Setup your CSV file
const csvWriter = createCsvWriter({
    path: 'sample-leads.csv',
    header: [
        { id: 'name', title: 'NAME' },
        { id: 'phone_number', title: 'PHONE_NUMBER' },
        { id: 'policy_interest', title: 'POLICY_INTEREST' }
    ]
});

app.get("/create_lead_record", (req, res) => {
    const { name, phone_number, policy_interest } = req.query;
    
    // Simulate storing lead information
    console.log(`New lead =>
        Full name: ${name}
        Phone number: ${phone_number}
        Policy interest: ${policy_interest}`);

    // Write lead information to CSV file
    const records = [{ name, phone_number, policy_interest }];
    csvWriter.writeRecords(records).then(() => {
        console.log("Lead information stored successfully.");
    });
    
    res.json({ message: "Lead information stored successfully." });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});