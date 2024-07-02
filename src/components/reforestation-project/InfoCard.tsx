import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

interface InfoCardProps {
    title: string;
    description: string;
}



function InfoCard({ title, description }: InfoCardProps) {
    return (
        <>
            <Card className="max-w-[200px]">
                <CardHeader className="flex gap-3">
                    {title}
                </CardHeader>
                {/* <Divider /> */}
                <CardBody>
                    {description}
                </CardBody>
            </Card>

        </>
    )
}

export default InfoCard