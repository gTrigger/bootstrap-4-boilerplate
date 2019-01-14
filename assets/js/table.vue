<template>
    <div class="container-table-input hidden" id="table-input">
        <form class="table-input-box" name="table-input-box">
            <h1>NEW ACTION</h1>
            <div>
                Date
                <div class="input-group date" data-provide="datepicker">
                    <br>
                    <input type="text" class="form-control" name="actionDate">
                    <div class="input-group-addon">
                    </div>
                </div>
            </div>
            <div>
                Action name
                <input type="text" name="actionName">
            </div>
            <div>
                Project identifier
                <input type="text" name="actionProjectID">
            </div>
            <div>
                Client name
                <input type="text" name="actionClientName">
            </div>
            <div>
                Comment
                <br>
                <input type="text" name="actionComment" class="comment">
            </div>
            <button type="button" class="fa fa-check form-check-btn" @click="addNewRow()"></button>
            <button type="button" class="fa fa-close form-cancel-btn" @click="toggle(containerTableInput)"></button>
        </form>
    </div>

    <div class="container-table grid-item hidden" id="table">
        <h1>LAST ACTIONS</h1>
        <div class="table-actions" id="table-actions">
            <div class="container-searchbox">
                <form>
                    <button type="button" class="fa fa-search search-icon-btn" disabled></button>
                    <input type="search" class="searchbox" id="table-searchbox" placeholder="Search..." @keyup="tableSearch()">
                    <button type="button" class="fa fa-close search-cancel-btn" @click="clearSearchbox()"></button>
                </form>
            </div>
            <div class="container-actions">
                <button class="fa fa-trash-o table-trash-btn" @click="makeModal('table','toggleContainer(containerConfirmAlertBox)','deleteEntireTable()')"></button>
                <button class="fa fa-plus table-add-btn" @click="toggle(containerTableInput)"></button>
            </div>
        </div>
        <br>
        <table align="center" class="table-data">
            <thead>
                <tr class="data-row-head">
                    <th width="10%" valign="center">Date</th>
                    <th width="20%" valign="center">Action Name</th>
                    <th width="20%" valign="center">Project identifier</th>
                    <th width="20%" valign="center">Client Name</th>
                    <th width="20%" valign="center">Comment</th>
                    <th width="5%" valign="center">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr class="data-row" style="display: none">
                    <td>Date</td>
                    <td>Action Name</td>
                    <td>Project identifier</td>
                    <td>Client Name</td>
                    <td>Comment</td>
                    <td>Delete</td>
                </tr>
            </tbody>

        </table>
        <div class="table-nav">
            <a href="#" class="bottom-btn first-btn"><i class="fa fa-angle-double-left"> </i> First</a>
            <a href="#" class="bottom-btn previous-btn"><i class="fa fa-angle-left"> </i> Previous</a>
            <a href="#" class="bottom-btn next-btn">Next <i class="fa fa-angle-right"> </i></a>
            <a href="#" class="bottom-btn last-btn">Last <i class="fa fa-angle-double-right"> </i></a>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>