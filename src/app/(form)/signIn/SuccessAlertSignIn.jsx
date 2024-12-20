import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  
  export default function SuccessAlertSignIn({ isOpen, onOpenChange }) {
    return (
      <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login Successful!</AlertDialogTitle>
            <AlertDialogDescription>
              You have successfully logged in. You will be redirected to the homepage.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  