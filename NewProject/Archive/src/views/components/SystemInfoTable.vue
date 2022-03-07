<template>
  <div class="card mb-4">
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>System Info</h6>
      <!-- <button class="btn btn-dark btn-sm m-3 rounded">Add System Details</button> -->
      <!-- Button trigger modal -->
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add System Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase" id="exampleModalLabel">Add System Details</h5>
        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
         <div class="mb-3">
            <label for="employee-id" class="col-form-label">Employee ID:</label>
            <input type="text" class="form-control" id="employee-id" placeholder="Enter Your ID">
          </div>
          <div class="mb-3">
            <label for="employee-name" class="col-form-label">Employee Name:</label>
            <input type="text" class="form-control" id="employee-name" placeholder="Enter Your Name">
          </div>
          <div class="mb-3">
            <label for="system-id" class="col-form-label">System ID:</label>
            <input type="text" class="form-control" id="system-id" placeholder="Enter Your System ID "/>
          </div>
          <div class="mb-3">
            <label for="system-type" class="col-form-label">System Type:</label>
            <input type="text" class="form-control" id="system-type" placeholder="Enter Your System Type"/>
          </div>
            <div class="mb-3">
            <label for="system-property" class="col-form-label">System's Property:</label>
            <input type="text" class="form-control" id="system-property" placeholder="Office/Own"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">Save</button>
      </div>  
    </div>
  </div>
</div>
<!-- Modal end-->
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee Name</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >System ID</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >System Type</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >System's property</th>
              <!-- <th class="text-secondary opacity-7"></th> -->
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <!-- <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img1" size="sm" border-radius="lg" class="me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                    <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                  </div>
                </div> -->
              </td>
              <td>
                  
              </td>
              <td>
                <!-- <p class="text-xs font-weight-bold mb-0">Manager</p>
                <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td class="align-middle text-center text-sm">
                <!-- <vsud-badge color="success" variant="gradient" size="sm">Online</vsud-badge> -->
              </td>
              <td class="align-middle text-center">
                <!-- <span class="text-secondary text-xs font-weight-bold">23/04/18</span> -->
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
