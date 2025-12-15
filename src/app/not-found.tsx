import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import Section from "@/components/global/section";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Section className="flex-1 flex place-items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ShieldAlert />
          </EmptyMedia>
          <EmptyTitle className="text-4xl font-bold">404 Not Found</EmptyTitle>
          <EmptyDescription>
            The page you are looking for doesn&apos;t exist or has been moved.
          </EmptyDescription>
        </EmptyHeader>
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <Link href="/">
            Return Home <ArrowUpRight />
          </Link>
        </Button>
      </Empty>
    </Section>
  );
};

export default NotFound;
