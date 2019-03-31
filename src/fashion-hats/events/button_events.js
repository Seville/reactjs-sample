	const showAddForm = function() {
		this.resetProps();
		this.setState({
			isAdd: true
		})
	};
	
	const showSearchForm = function() {
		this.resetProps();
		this.setState({
			isSearch: true,
		});
	};
	
	const showEditForm = function(item) {
		this.resetProps();
		this.setState({
			isEdit: true,
			selected: item
		});
	};
	
	const showTable = function() {
		this.resetProps();
		this.setState({
			isTable: true
		});
	};

	const resetProps = function() {
		this.setState({
			...this.clone
		});
	};
	
export default { showAddForm, showSearchForm, showEditForm, showTable, resetProps }