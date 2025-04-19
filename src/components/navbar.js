import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    const searchText = this.searchInputRef.current.value;
    if (searchText.trim()) {
      this.props.onSearch(searchText);
    }
  }

  render() {
    const { isScrolled } = this.state;

    return (
      <div className="navbar-wrapper">
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled shadow-sm' : ''}`}>
          <div className="container">
            <button 
              className="navbar-brand d-flex align-items-center btn btn-link p-0" 
              onClick={() => this.props.onNavigate('home')}
            >
              <i className="fas fa-newspaper me-2"></i>
              <span>TrendsAffair</span>
            </button>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="ms-auto">
                <form className="d-flex search-form" onSubmit={this.handleSearch}>
                  <div className="input-group">
                    <input 
                      ref={this.searchInputRef}
                      className="form-control search-input" 
                      type="search" 
                      placeholder="Search for news..." 
                      aria-label="Search"
                    />
                    <button className="btn search-btn" type="submit">
                      <i className="fas fa-search"></i>
                      <span className="ms-1 d-none d-md-inline">Search</span>
                    </button>
                    {this.props.searchQuery && (
                      <button 
                        className="btn clear-btn" 
                        onClick={() => this.props.onClearSearch()}
                        type="button"
                        title="Clear search"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
        <div className="navbar-spacer"></div>
      </div>
    )
  }
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  searchQuery: ''
}

export default Navbar;
