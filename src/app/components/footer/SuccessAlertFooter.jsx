// SuccessAlertFooter.jsx
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const SuccessAlertFooter = ({ isOpen, onOpenChange }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thank you for subscribing!</AlertDialogTitle>
          <AlertDialogDescription>
            You are now subscribed to our newsletter. You will receive the
            latest news, articles, and resources directly in your inbox every
            week.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessAlertFooter;
