<!-- ejs模板 -->
<div class="template">
	<h2> <%= name %> </h2>
	<% for(var txt in list){ %>
		<div class="template-txt"><%= list[txt] %> </div>
	<% } %>
</div>