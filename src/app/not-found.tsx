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

const styles = {
  container: "flex-1 flex place-items-center justify-center",
  title: "text-4xl font-bold",
  button: "text-muted-foreground",
};

const NotFound = () => {
  return (
    <Section className={styles.container}>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ShieldAlert />
          </EmptyMedia>
          <EmptyTitle className={styles.title}>404 Not Found</EmptyTitle>
          <EmptyDescription>
            The page you are looking for doesn&apos;t exist or has been moved.
          </EmptyDescription>
        </EmptyHeader>
        <Button variant="link" asChild className={styles.button} size="sm">
          <Link href="/">
            Return Home <ArrowUpRight />
          </Link>
        </Button>
      </Empty>
    </Section>
  );
};

export default NotFound;
