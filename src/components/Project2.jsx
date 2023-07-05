import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Project2() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleCreate = (e) => {
    e.preventDefault();
    const newItem = { name, email };
    setData([...data, newItem]);
    setName('');
    setEmail('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(data[index].name);
    setEditEmail(data[index].email);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedItem = { name: editName, email: editEmail };
    const updatedData = [...data];
    updatedData[editIndex] = updatedItem;
    setData(updatedData);
    setEditIndex(-1);
    setEditName('');
    setEditEmail('');
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      <h1>CRUD Project</h1>

      <h2><Link to="/project2"></Link></h2>
      <form onSubmit={handleCreate}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>

      <h2>Read</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editIndex !== -1 && (
        <div>
          <h2>Update</h2>
          <form onSubmit={handleUpdate}>
            <label htmlFor="editName">Name:</label>
            <input
              type="text"
              id="editName"
              name="editName"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label htmlFor="editEmail">Email:</label>
            <input
              type="email"
              id="editEmail"
              name="editEmail"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Project2;
