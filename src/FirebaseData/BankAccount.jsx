import { useState, useEffect } from "react";
import { database, ref, set, push, get } from "../firebaseConfig";

const BankAccount = () => {
  const [bankDetails, setBankDetails] = useState({
    samiti_name: "",
    account_holder_name: "", // Added Account Holder Name
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    upi_id: "",
    qr_image: "",
    contact_number: "",
    contact_number2: "",
    contact_number3: ""
  });

  const [bankList, setBankList] = useState([]);

  // Function to handle form input changes
  const handleChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  // Function to add bank details to Firebase
  const addBankDetails = async () => {
    try {
      const bankRef = ref(database, "samiti_bank_details");
      const newBankRef = push(bankRef);
      await set(newBankRef, bankDetails);
      console.log("Bank details added successfully!");
      setBankDetails({
        samiti_name: "",
        account_holder_name: "", // Reset Account Holder Name
        bank_name: "",
        account_number: "",
        ifsc_code: "",
        upi_id: "",
        qr_image: "",
        contact_number: "",
        contact_number2: "",
        contact_number3: ""
      });
      fetchBankDetails(); // Refresh list
    } catch (error) {
      console.error("Error saving bank details:", error);
    }
  };

  // Function to fetch stored bank details
  const fetchBankDetails = async () => {
    try {
      const snapshot = await get(ref(database, "samiti_bank_details"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const bankArray = Object.values(data);
        setBankList(bankArray);
      } else {
        setBankList([]);
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchBankDetails();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🏦 समिति बैंक खाता</h2>

      {/* Input Form */}
      <input type="text" name="samiti_name" placeholder="समिति का नाम" value={bankDetails.samiti_name} onChange={handleChange} />
      <input type="text" name="account_holder_name" placeholder="खाता धारक का नाम" value={bankDetails.account_holder_name} onChange={handleChange} />
      <input type="text" name="bank_name" placeholder="बैंक का नाम" value={bankDetails.bank_name} onChange={handleChange} />
      <input type="text" name="account_number" placeholder="खाता नंबर" value={bankDetails.account_number} onChange={handleChange} />
      <input type="text" name="ifsc_code" placeholder="IFSC कोड" value={bankDetails.ifsc_code} onChange={handleChange} />
      <input type="text" name="upi_id" placeholder="UPI ID" value={bankDetails.upi_id} onChange={handleChange} />
      <input type="text" name="qr_image" placeholder="QR इमेज URL" value={bankDetails.qr_image} onChange={handleChange} />
      
      {/* Multiple Contact Numbers */}
      <input type="text" name="contact_number" placeholder="संपर्क नंबर 1" value={bankDetails.contact_number} onChange={handleChange} />
      <input type="text" name="contact_number2" placeholder="संपर्क नंबर 2" value={bankDetails.contact_number2} onChange={handleChange} />
      <input type="text" name="contact_number3" placeholder="संपर्क नंबर 3" value={bankDetails.contact_number3} onChange={handleChange} />

      <button onClick={addBankDetails}>💾 बैंक जानकारी जोड़ें</button>

      <h3>📜 सहेजे गए बैंक विवरण</h3>
      <ul>
        {bankList.map((bank, index) => (
          <li key={index}>
            <strong>{bank.samiti_name}</strong> ({bank.bank_name})<br />
            👤 <b>{bank.account_holder_name}</b> <br />
            AC: {bank.account_number}, IFSC: {bank.ifsc_code}, UPI: {bank.upi_id} <br />
            📞 {bank.contact_number}, {bank.contact_number2}, {bank.contact_number3}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccount;
