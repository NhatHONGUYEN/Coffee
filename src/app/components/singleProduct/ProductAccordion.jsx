import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductAccordion = ({ product }) => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="font-bold">Region:</AccordionTrigger>
      <AccordionContent>{product.region}</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="font-bold">Weight:</AccordionTrigger>
      <AccordionContent>{product.weight}</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="font-bold">Roast Level:</AccordionTrigger>
      <AccordionContent>{product.roast_level}</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className="font-bold">Flavor Profile:</AccordionTrigger>
      <AccordionContent>{product.flavor_profile}</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default ProductAccordion;
