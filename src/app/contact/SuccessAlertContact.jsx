import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function SuccessAlertContact({ isOpen, onOpenChange }) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Merci pour votre message !</AlertDialogTitle>
          <AlertDialogDescription>
            Nous vous contacterons au plus vite. Vous allez être redirigé vers
            la page d'accueil.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
