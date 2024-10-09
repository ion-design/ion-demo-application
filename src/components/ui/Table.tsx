'use client';
// ion/TableContainer: Generated with Ion on 2/5/2024, 12:14:35 AM
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TableRoot = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
	({ className, ...props }, ref) => (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className="relative w-full overflow-auto"
		>
			<table
				ref={ref}
				className={clsx('w-full caption-bottom overflow-hidden rounded-radius bg-base', className)}
				{...props}
			/>
		</motion.div>
	)
);
TableRoot.displayName = 'Table';

const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead
		ref={ref}
		className={clsx('bg-weak [&>tr]:border-b-0', className)}
		{...props}
	/>
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<motion.tbody
		ref={ref}
		className={clsx('', className)}
		initial="hidden"
		animate="visible"
		variants={{
			visible: {
				transition: {
					staggerChildren: 0.05,
				},
			},
			hidden: {},
		}}
		{...props}
	/>
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={clsx('border-b border-slate-200 font-medium', className)}
		{...props}
	/>
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
	({ className, ...props }, ref) => (
		<motion.tr
			ref={ref}
			className={clsx(
				'border-b last:border-b-0 hover:bg-weak data-[state=selected]:bg-weak',
				className
			)}
			whileHover={{ scale: 1.02, backgroundColor: 'rgba(245, 245, 245, 1)' }}
			animate={{ backgroundColor: props['data-state'] === 'selected' ? 'rgba(245, 245, 245, 1)' : '#fff' }}
			transition={{ duration: 0.3 }}
			{...props}
		/>
	)
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={clsx(
			'px-5 py-3 text-left align-middle text-sm font-normal text-sub-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] transition-colors duration-300',
			className
		)}
		{...props}
	/>
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<motion.td
		ref={ref}
		className={clsx(
			'px-5 py-3 align-middle text-sm [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
			className
		)}
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -10 }}
		transition={{ duration: 0.3 }}
		{...props}
	/>
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={clsx('text-description mt-4 text-sm', className)}
		{...props}
	/>
));
TableCaption.displayName = 'TableCaption';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	footer?: React.ReactNode;
	caption?: string;
	className?: string;
}

export default function Table<TData, TValue>({
	columns,
	data,
	footer,
	caption,
	className,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			rowSelection,
		},
	});

	return (
		<motion.div
			className={clsx('w-full space-y-4', className)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<div>
				<TableRoot className="w-full">
					{columns.some((column) => !!column.header) && (
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id} colSpan={header.colSpan}>
												{header.isPlaceholder
													? null
													: flexRender(header.column.columnDef.header, header.getContext())}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
					)}
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
					{caption && <TableCaption>{caption}</TableCaption>}
					{footer && (
						<TableFooter>
							<div className="px-5 py-3">{footer}</div>
						</TableFooter>
					)}
				</TableRoot>
			</div>
		</motion.div>
	);
}
Table.displayName = 'Table';

export {
	TableRoot,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};