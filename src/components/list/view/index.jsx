import React, { Component } from 'react';
import List from './list';

/**
 *  
    tables: false, // Use tables markup
    sortable: true, // Can sort columns
    sort: function(page,filters,order) {
         *  this function is called when sort action is triggered
         *  @param page Number This is the current page number requried when fetching data
         *  @param filters Array This is an array of filters in format of [{ 'key': ['values','more_values'] }]
         *  @param order Array This is an array of sort orders in format of [{ 'key': 'value' }]
    },
    pagination: 'none', // @param pagination string. Options are none, more (more button), and paginate (numbers)
    paginate: function(page,filters,order) {
         * this function is called when the pagination action is triggered
         * @params as above
    },
    actions: ['edit', 'delete'], // This is to render Edit and Delete buttons for those actions
    editType: 'modal', // @param editType String. When editing, should inline or modal editer be used
    edit: function(data) {
         * This function is caled when the row editor makes a save
         * @param data is an object of all form data.
    },
    editCallback: function(status, data) {
         * This function is caled on callback when the row editor completes a save
         * @param status Number is a `success` or `error` status based on api response status code 
         * @param data is an object of updated form data after the save
    },
    delete: function(id) {
         * This function is caled when the delete action is called on a row
         * @param id is an id for that row of data
    },
     * @param headers Array. Headers is an array of objects with the following
     * set of parameters
     *      @param title String. title is used for the form label
     *      @param field String. This is a text id for the field. We use it for name
     *      @param display Bool. This is a flag to know if the field should be displayed in the table view, or only the editor
     *      @param type String. This is the field type required for the edit form
     *      @param editbale Bool. This is a flag to know if the field will be editable.
    headers: [{
        title: 'name',
        field: 'name',
        display: true,
        type: 'text',
        editable: true
    }],
     * @param baseData Array. This is the data used in the list view. It's an array of objects
     *      @param id String. This is the id for this row entry.
     *      @param data Array. This is the array of data objects. 
     *          @param label String. The label for the form. Should match the header parameter for `field`
     *          @param value Mixed. The value of the field.
    baseData: [{
        id: '1',
        data: [{
            label: 'name',
            value: 'Example Name'
        }]
    }]
 */

class ListView extends Component {
    constructor(props) {
        super(props);
        const { baseData, page } = props;
        const _page = page || 1;

        console.log('ListView', props);

        this.state = {
            data: baseData,
            sortDirection: 0,
            sortColumn: null,
            page: _page,
            filters: []
        };

        this.sort = this.sort.bind(this);
        this.paginate = this.paginate.bind(this);
        this.edit = this.edit.bind(this);
        this.editCallback = this.editCallback.bind(this);
        this.deleteFunction = this.deleteFunction.bind(this);
    }

    sort(column) {
        const { sort } = this.props;
        const { page, filters, sortColumn, sortDirection } = this.state;
        let direction = sortDirection + 0;
        if (column === sortColumn) {
            direction = sortDirection * -1;
        } else {
            direction = 1;
        }
        this.setState({
            sortColumn: column,
            sortDirection: direction
        });
        return sort(page, filters, column, direction);
    }

    paginate(page) {
        console.log(`page to page ${page}`);
        const { paginate } = this.props;
        const { filters, sortDirection, sortColumn } = this.state;
        this.setState({
            page
        });
        return paginate(page, filters, sortColumn, sortDirection);
    }

    filter() {
        const { filter } = this.props;
        const { page, filters, sortDirection, sortColumn } = this.state;

        return filter(page, filters, sortColumn, sortDirection);
    }

    edit(data) {
        const { edit: action } = this.props;

        return action(data, this.editCallback);
    }

    editCallback(status, data) {
        // modify row based on status and data
        console.log(this, status, data);
    }

    deleteFunction(id) {
        const { delete: action } = this.props;
        // did not use destructuring elements because delete is already function in javascript
        return action(id, this.state);
    }

    render() {
        const { data, page, sortColumn, sortDirection } = this.state;
        const { editType, totalRecords, modalHeader, sortable } = this.props;
        return (
            <List
                {...this.props}
                data={data}
                sortable={sortable}
                sort={this.sort}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                paginate={this.paginate}
                page={page}
                totalRecords={totalRecords}
                edit={this.edit}
                editType={editType}
                editCallback={this.editCallback}
                deleteFunction={this.deleteFunction}
                modalHeader={modalHeader}
            />
        );
    }
}

export default ListView;
