"use client"

import { AccountProfileProps } from "@/types"
import { UserValidation } from "@/validations/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { ChangeEvent, useState } from "react"

const AccountProfile = ({ user, btnTitle }: AccountProfileProps) => {
    const [files, setFiles] = useState<File[]>([])

    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            avatar: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || ""
        }
    })

    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
        e.preventDefault()

        const fileReader = new FileReader()

        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]

            setFiles(Array.from(e.target.files))

            if(!file.type.includes("image")) return

            fileReader.onload = async (event) => {
                const imageDataUrl = event.target?.result?.toString() || ""

                fieldChange(imageDataUrl)
            }

            fileReader.readAsDataURL(file)
        }
    }

    function onSubmit(values: z.infer<typeof UserValidation>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-10"
            >
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-4">
                            <FormLabel className="size-24 bg-color-2 rounded-full overflow-hidden flex-center">
                                {field.value ? (
                                    <Image 
                                        src={field.value}
                                        alt={user?.name}
                                        width={96}
                                        height={96}
                                        priority
                                        className="object-contain rounded-full"
                                    />
                                ) : (
                                    <Image 
                                        src="/assets/icons/profile.svg"
                                        alt="profile"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                )}
                            </FormLabel>

                            <FormControl>
                                <Input 
                                    type="file"
                                    accept="image/*"
                                    className="!mt-0 bg-transparent border-none outline-none cursor-pointer !text-16-semibold file:text-color-6 text-gray-200 flex-1"
                                    onChange={(e) => handleImage(e, field.onChange)}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-5">
                            <FormLabel className="!text-16-semibold text-color-4">
                                Name
                            </FormLabel>

                            <FormControl>
                                <Input 
                                    type="text"
                                    placeholder="name..."
                                    {...field}
                                    className="!mt-0 bg-color-7 border border-color-2 text-white focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </FormControl>

                            <FormMessage className="!mt-0 text-red-500" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-5">
                            <FormLabel className="!text-16-semibold text-color-4">
                                Username
                            </FormLabel>

                            <FormControl>
                                <Input 
                                    type="text"
                                    placeholder="username..."
                                    {...field}
                                    className="!mt-0 bg-color-7 border border-color-2 text-white focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </FormControl>

                            <FormMessage className="!mt-0 text-red-500" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-5">
                            <FormLabel className="!text-16-semibold text-color-4">
                                Bio
                            </FormLabel>

                            <FormControl>
                                <Textarea
                                    rows={10}
                                    placeholder="bio..."
                                    {...field}
                                    className="!mt-0 bg-color-7 border border-color-2 text-white focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </FormControl>

                            <FormMessage className="!mt-0 text-red-500" />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="bg-color-3 hover:bg-color-3/90 text-white"
                >
                    {btnTitle}
                </Button>
            </form>
        </Form>
    )
}

export default AccountProfile