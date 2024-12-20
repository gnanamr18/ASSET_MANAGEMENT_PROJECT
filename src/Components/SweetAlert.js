import Swal from "sweetalert2";
import { scrapAsset } from "../API/asset";
import { resignEmployee } from "../API/employee";

export async function showAlert(arg, component,id) {
  try {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: arg,
    });

    // If confirmed, proceed with the action
    if (result.isConfirmed) {
      let successMessage = "";

      // Call the respective async function based on component type
      if (component === "asset") {
        const res = await scrapAsset(id); // Call async function for asset
        successMessage = res ? "Asset has been marked as obsolete." : "Error while marking asset obsolete.";
      } else if (component === "employee") {
        const res = await resignEmployee(id); // Call async function for employee
        successMessage = res ? "Employee has been marked as resigned." : "Error while marking employee resigned.";
      }

      // Show success message if the operation was successful
      if (successMessage) {
        Swal.fire({
          title: "COMPLETED!",
          text: successMessage,
          icon: "success",
        });
      } else {
        // Handle error if something went wrong
        Swal.fire({
          title: "Error!",
          text: "There was an issue completing the action. Please try again.",
          icon: "error",
        });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      title: "Error!",
      text: "An unexpected error occurred. Please try again later.",
      icon: "error",
    });
  }
}
