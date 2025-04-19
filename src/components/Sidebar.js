import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Sidebar extends Component {
  render() {
    const categories = [
      { key: 'general', name: 'General' },
      { key: 'business', name: 'Business' },
      { key: 'entertainment', name: 'Entertainment' },
      { key: 'health', name: 'Health' },
      { key: 'science', name: 'Science' },
      { key: 'sports', name: 'Sports' },
      { key: 'technology', name: 'Technology' }
    ];

    return (
      <div className="border border-dark p-3 my-3" style={{borderRadius: '10px'}}>
        <h3 className="mb-3 text-center">Categories</h3>
        {this.props.disabled && (
          <div className="alert alert-warning">
            Clear search to browse categories
          </div>
        )}
        <div className="list-group">
          {categories.map(category => (
            <button 
              key={category.key}
              className={`list-group-item list-group-item-action ${this.props.activeCategory === category.key ? 'active bg-warning text-dark' : ''}`}
              onClick={() => this.props.onCategoryChange(category.key)}
              disabled={this.props.disabled}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

Sidebar.defaultProps = {
  disabled: false
}

export default Sidebar;