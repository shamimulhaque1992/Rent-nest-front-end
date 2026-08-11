"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  updateProfileAction,
  IUpdateProfileState,
} from "../_actions/updateProfileAction";
import { IUserData } from "@/lib/types";

const initialState: IUpdateProfileState = null;

export default function EditProfileForm({ user }: { user: IUserData }) {
  const [open, setOpen] = useState(false);

  const boundAction = updateProfileAction.bind(null, user?.id as string);
  const [state, action, pending] = useActionState(boundAction, initialState);

  useEffect(() => {
    if (state?.success === true) {
      toast.success(state.message || "Profile updated successfully!");
      startTransition(() => {
        setOpen(false);
      });
    }
    if (state?.success === false) {
      toast.error(state.message || "Failed to update profile.");
    }
  }, [state?.success, state?.message]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Pencil className="h-3.5 w-3.5" />
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">
            Edit Profile
          </DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={user.name}
              placeholder="John Doe"
              className="h-10"
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={user.email}
              placeholder="name@example.com"
              className="h-10"
            />
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="avatar" className="text-sm font-medium">
              Avatar URL
            </Label>
            <Input
              id="avatar"
              name="avatar"
              defaultValue={user.profile?.avatar || ""}
              placeholder="https://example.com/avatar.jpg"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              defaultValue={user.profile?.phone || ""}
              placeholder="+1 (555) 000-0000"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium">
              Bio
            </Label>
            <Textarea
              id="bio"
              name="bio"
              defaultValue={user.profile?.bio || ""}
              placeholder="Tell us a little about yourself..."
              rows={3}
              className="resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending} className="font-semibold">
              {pending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
