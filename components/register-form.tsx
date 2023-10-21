'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function RegisterForm() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-10 flex-grow mb-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Admin User Management</CardTitle>
            <CardDescription>Enter user details to create a new user</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="johndoe@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select id="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Create User
            </Button>
          </CardFooter>
        </Card>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
