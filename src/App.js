import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/News';
import Sidebar from './components/Sidebar';
import About from './components/About';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'general',
      searchQuery: '',
      currentPage: 'home' // 'home' or 'about'
    }
  }

  handleCategoryChange = (category) => {
    this.setState({ 
      category,
      searchQuery: '' // Clear search when changing category
    });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }

  handleClearSearch = () => {
    this.setState({ searchQuery: '' });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <Navbar 
          onSearch={this.handleSearch} 
          onClearSearch={this.handleClearSearch}
          searchQuery={this.state.searchQuery}
          onNavigate={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
        
        {this.state.currentPage === 'home' ? (
          <div className="container-fluid mt-5 pt-3">
            <div className="row">
              <div className="col-md-3">
                <Sidebar 
                  activeCategory={this.state.category}
                  onCategoryChange={this.handleCategoryChange}
                  disabled={this.state.searchQuery !== ''}
                />
              </div>
              <div className="col-md-9">
                <News 
                  category={this.state.category} 
                  searchQuery={this.state.searchQuery}
                />
              </div>
            </div>
          </div>
        ) : (
          <About />
        )}
      </div>
    )
  }
}
