import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"






export default function CreatePage() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Log in</TabsTrigger>
        <TabsTrigger value="password">Sign in</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              If you have a registered account, please log in here to create New Events.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email Id</Label>
              <Input id="name" defaultValue="pedroduarte@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="current" type="password"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Log in</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              If you are a new user, please create an account here to create New Events.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Enter you eamil id</Label>
              <Input id="name" defaultValue="pedroduarte@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Enter your password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="flex flex-col justify-center">Sign in</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  ) 
}
