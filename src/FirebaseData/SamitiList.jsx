import { useEffect, useState } from "react";
import { database, ref, get, push, set } from "../firebaseConfig";

const SamitiList = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to fetch members from Firebase
  const fetchMembers = async () => {
    try {
      const snapshot = await get(ref(database, "samiti_sadashya"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const membersArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setMembers(membersArray);
      } else {
        setMembers([]);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  // Function to add a new member
  const addSamitiSadashya = async () => {
    if (!name) {
      alert("Please enter a name.");
      return;
    }

    const newMember = {
      name: name,
      phone_number: phoneNumber || null, // Use null if phone number is empty
    };

    try {
      const membersRef = ref(database, "samiti_sadashya");
      const newMemberRef = push(membersRef);
      await set(newMemberRef, newMember);
      setName("");
      setPhoneNumber("");
      fetchMembers(); // Refresh the list
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  // Fetch members on component mount
  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Samiti Sadashya List</h2>

      {/* Form to add a new member */}
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={addSamitiSadashya}>Add Member</button>
      </div>

      {/* Display the list of members */}
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.phone_number || "No Phone"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SamitiList;
