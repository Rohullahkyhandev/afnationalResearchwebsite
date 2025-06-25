"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

// Form Schema
const formSchema = z.object({
  researcherName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  institution: z.string().min(2, "Institution name required"),
  department: z.string().optional(),
  researchTitle: z.string().min(10, "Please provide a descriptive title"),
  researchPurpose: z.enum([
    "academic",
    "commercial",
    "government",
    "non-profit",
    "personal",
  ]),
  passageType: z.array(z.string()).nonempty("Select at least one type"),
  languagePreference: z.string(),
  deadline: z.date({
    required_error: "Please select a deadline",
  }),
  specialRequirements: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val, "You must agree to the terms"),
});

export function PassageRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      researcherName: "",
      email: "",
      institution: "",
      researchTitle: "",
      passageType: [],
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Add your form submission logic here
  }

  return (
    <div className="max-w-3xl mt-8 mb-6 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Research Passage Request</h2>
      <p className="text-gray-600 mb-6">
        Please complete this form to request access to research materials. Our team will
        review your request within 3-5 business days.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Researcher Information */}
            <FormField
              control={form.control}
              name="researcherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="researcher@institution.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution/Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="University of Research" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Department of Linguistics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Research Details */}
          <FormField
            control={form.control}
            name="researchTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Research Title/Project Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="A Study of Semantic Shifts in 21st Century Digital Communication"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="researchPurpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose of Research</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select research purpose" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="academic">Academic Research</SelectItem>
                    <SelectItem value="commercial">Commercial Application</SelectItem>
                    <SelectItem value="government">Government Research</SelectItem>
                    <SelectItem value="non-profit">Non-Profit Research</SelectItem>
                    <SelectItem value="personal">Personal Study</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Passage Type (Checkboxes) */}
          <FormField
            control={form.control}
            name="passageType"
            render={() => (
              <FormItem>
                <FormLabel>Type of Passages Needed</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {[
                    "Historical Texts",
                    "Literary Works",
                    "Scientific Papers",
                    "Legal Documents",
                    "News Articles",
                    "Transcripts",
                  ].map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="passageType"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== item)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language Preference */}
            <FormField
              control={form.control}
              name="languagePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="other">Other (specify in notes)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Deadline Date Picker */}
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Required By</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Minimum processing time is 3 business days
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Special Requirements */}
          <FormField
            control={form.control}
            name="specialRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific formatting, annotation needs, or other special requests"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please describe any special formatting or processing requirements
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms Agreement */}
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the{" "}
                    <a href="#" className="text-primary underline">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary underline">
                      Data Access Policy
                    </a>
                  </FormLabel>
                  <FormDescription>
                    By checking this box, you confirm that you will use these materials
                    only for the stated research purpose
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" size="lg" className="px-8">
              Submit Request
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}