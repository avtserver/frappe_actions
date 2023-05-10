frappe.pages['frontend-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Frappe Actions Frontend ',
		single_column: true
	});
}