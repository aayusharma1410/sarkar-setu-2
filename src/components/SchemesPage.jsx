import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SchemesPage.css';

function SchemesPage() {
    const [schemes, setSchemes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [filteredSchemes, setFilteredSchemes] = useState([]);

    useEffect(() => {
        // Fetch schemes data from an API or a local JSON file
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
        // For now, using dummy data
        const dummySchemes = [
            { id: 1, name: 'Scheme A', category: 'Education', description: 'Details about Scheme A', eligibility: 'Age: 18-25' },
            { id: 2, name: 'Scheme B', category: 'Agriculture', description: 'Details about Scheme B', eligibility: 'Farmers only' },
            { id: 3, name: 'Scheme C', category: 'Healthcare', description: 'Details about Scheme C', eligibility: 'For families with low income' }
        ];
        setSchemes(dummySchemes);
        setFilteredSchemes(dummySchemes);
    }, []);

    useEffect(() => {
        // Filter schemes based on search term and category
        let results = schemes;
        if (searchTerm) {
            results = results.filter(scheme =>
                scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (category) {
            results = results.filter(scheme => scheme.category === category);
        }
        setFilteredSchemes(results);
    }, [searchTerm, category, schemes]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="schemes-container">
            <h1>Explore Government Schemes</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by keyword"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <select value={category} onChange={handleCategoryChange} className="category-select">
                    <option value="">All Categories</option>
                    <option value="Education">Education</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Healthcare">Healthcare</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <ul className="schemes-list">
                {filteredSchemes.map(scheme => (
                    <li key={scheme.id} className="scheme-card">
                        <h2>{scheme.name}</h2>
                        <p><strong>Category:</strong> {scheme.category}</p>
                        <p>{scheme.description}</p>
                        <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                        <a href="#" className="apply-button">Apply Now</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SchemesPage;
